import React, { useCallback, useEffect, useMemo } from "react";
import { MdOutlineEmojiObjects } from "react-icons/md";
import { PiStrategy } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { CiTimer } from "react-icons/ci";
import Slider from "react-input-slider";

import * as SC from "./styles";
import { TextWithIcon } from "../../components/TextWithIcon";
import { useGlobalContext } from "../../contexts/global";

type EstimateInput = {
  complexityLevel: number;
  initialEstimatedHours: number;
  developmentHours: number;
  testingHours: number;
};

const EstimatePage: React.FC = () => {
  const { session, updateSession } = useGlobalContext();

  const { register, handleSubmit, watch, setValue } = useForm<EstimateInput>({
    defaultValues: {
      complexityLevel: 1,
      initialEstimatedHours: 8,
      developmentHours: 6,
      testingHours: 2,
    },
  });

  useEffect(() => {
    if (!session || !session.estimate) {
      return;
    }

    setValue("complexityLevel", session.estimate.complexityLevel);
    setValue(
      "initialEstimatedHours",
      session.estimate.developmentHours + session.estimate.testingHours
    );
    setValue("developmentHours", session.estimate.developmentHours);
    setValue("testingHours", session.estimate.testingHours);
  }, [session]);

  const complexityLevel = Number(watch("complexityLevel"));
  const initialEstimatedHours = Number(watch("initialEstimatedHours"));
  const developmentHours = Number(watch("developmentHours"));
  const testingHours = Number(watch("testingHours"));

  const qaHours = useMemo(
    () => Math.ceil(complexityLevel * testingHours),
    [complexityLevel, initialEstimatedHours, developmentHours, testingHours]
  );

  const onSubmit = useCallback(
    (formData: EstimateInput) => {
      updateSession({
        ...session,
        estimate: {
          qaHours,
          developmentHours: formData.developmentHours,
          testingHours: formData.testingHours,
          complexityLevel: formData.complexityLevel,
        },
      });
    },
    [session, qaHours]
  );

  const formatHoursToDays = useCallback((hours: number) => {
    return `(${Math.floor(hours / 8)}d ${Math.ceil(hours % 8)}h)`;
  }, []);

  return (
    <SC.Container>
      <SC.EstimateForm onSubmit={handleSubmit(onSubmit)}>
        <SC.ComplexityLevelInput>
          <TextWithIcon variant="large" icon={<PiStrategy />}>
            How complex is it?
          </TextWithIcon>

          <SC.ComplexityLevelInputSliderContainer>
            <Slider
              axis="x"
              xstep={0.1}
              xmin={0.5}
              xmax={1.5}
              x={complexityLevel}
              onChange={({ x }) => setValue("complexityLevel", Number(x))}
              styles={{
                track: {
                  width: "90%",
                  background:
                    "linear-gradient(to right, #3cea1e, #ebd726, #e73d0d)",
                },
                active: {
                  background: "none",
                },
              }}
            />

            <div className="indicators">
              <span>Nothing</span>
              <span>Much</span>
            </div>
          </SC.ComplexityLevelInputSliderContainer>
        </SC.ComplexityLevelInput>

        <div>
          <TextWithIcon variant="large" icon={<CiTimer />}>
            How many hours would it take?
          </TextWithIcon>

          <SC.HoursInput>
            <SC.AddDayButton
              $color="#ed7e16"
              type="button"
              onClick={() => {
                if (initialEstimatedHours < 8) {
                  return;
                }

                setValue("initialEstimatedHours", initialEstimatedHours - 8);
              }}
            >
              -1 day
            </SC.AddDayButton>

            <input
              type="number"
              min={0}
              {...register("initialEstimatedHours")}
            />

            <span>hours</span>

            <span>{formatHoursToDays(initialEstimatedHours)}</span>

            <SC.AddDayButton
              $color="#4CAF50"
              type="button"
              onClick={() => {
                setValue("initialEstimatedHours", initialEstimatedHours + 8);
              }}
            >
              +1 day
            </SC.AddDayButton>
          </SC.HoursInput>
        </div>

        <div>
          <TextWithIcon variant="large" icon={<CiTimer />}>
            Does Your estimate fit?
          </TextWithIcon>
        </div>

        <SC.StepTimeDistributor>
          <div className="header">
            <SC.StepCard $color="#4CAF50" className="step-card">
              Development
            </SC.StepCard>

            <SC.HoursInput>
              <input readOnly type="number" min={0} value={developmentHours} />
              <span>hours</span>
              <span>{formatHoursToDays(developmentHours)}</span>
            </SC.HoursInput>
          </div>

          <Slider
            axis="x"
            xstep={1}
            xmin={0}
            xmax={initialEstimatedHours}
            x={developmentHours}
            onChange={({ x }) => {
              setValue("developmentHours", Number(x));
              setValue("testingHours", initialEstimatedHours - Number(x));
            }}
            styles={{
              track: {
                width: "100%",
              },
              active: {
                background: "#4CAF50",
              },
            }}
          />
        </SC.StepTimeDistributor>

        <SC.StepTimeDistributor>
          <div className="header">
            <SC.StepCard $color="#FF9800" className="step-card">
              Testing
            </SC.StepCard>

            <SC.HoursInput>
              <input readOnly type="number" min={0} value={testingHours} />
              <span>hours</span>
              <span>{formatHoursToDays(testingHours)}</span>
            </SC.HoursInput>
          </div>

          <Slider
            axis="x"
            xstep={1}
            xmin={0}
            xmax={initialEstimatedHours}
            x={testingHours}
            onChange={({ x }) => {
              setValue("testingHours", Number(x));
              setValue("developmentHours", initialEstimatedHours - Number(x));
            }}
            styles={{
              track: {
                width: "100%",
              },
              active: {
                background: "#FF9800",
              },
            }}
          />
        </SC.StepTimeDistributor>

        <SC.StepTimeDistributor>
          <div className="header">
            <SC.StepCard $color="#2196F3" className="step-card">
              QA
            </SC.StepCard>

            <SC.HoursInput>
              <input readOnly type="number" min={0} value={qaHours} />
              <span>hours</span>
              <span>{formatHoursToDays(qaHours)}</span>
            </SC.HoursInput>
          </div>
        </SC.StepTimeDistributor>

        <div
          style={{ flexDirection: "row", alignItems: "center", gap: "0.4rem" }}
        >
          <MdOutlineEmojiObjects size={32} />

          <p style={{ fontSize: "1.6rem" }}>
            This task would take{" "}
            <strong
              style={{
                padding: "0 4px",
                borderBottom: "solid 1px #ddd",
              }}
            >
              {initialEstimatedHours + qaHours}
            </strong>{" "}
            hours.{" "}
            <span style={{ fontSize: "1rem" }}>
              ({Math.max(1, Math.ceil((initialEstimatedHours + qaHours) / 8))}{" "}
              days) | (
              {Math.max(1, Math.ceil((initialEstimatedHours + qaHours) / 8)) *
                2}{" "}
              pts)
            </span>
          </p>
        </div>

        {/* <SC.Button type="submit">Makes sense for me</SC.Button> */}
      </SC.EstimateForm>
    </SC.Container>
  );
};

export { EstimatePage };
