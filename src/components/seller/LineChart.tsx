import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CurveType } from "recharts/types/shape/Curve";

type LineProps = {
  color: string;
  type?: CurveType;
  name: string;
  dotShow: boolean;
  dotSize: number;
  lineWidth: number;
};

interface ComponentProps<T> {
  chartData: T[];
  lines: LineProps[];
  legend?: boolean;
  tickCount?: number;
  gridShow?: boolean;
  paddingX?: { left: number; right: number };
  customX?: boolean;
  customY?: boolean;
}

interface XAxisTickProps {
  x: number;
  y: number;
  stroke?: string;
  payload: {
    value: string | number;
  };
}

function CustomizedXAxisTick(props: XAxisTickProps) {
  const { x, y, stroke, payload } = props;

  return (
    <text
      x={x}
      y={y}
      dy={10}
      fill="#1137D0"
      fontWeight="bold"
      fontSize={10}
      textAnchor="middle"
    >
      {payload.value}
    </text>
  );
}

function DefaultXAxisTick(props: XAxisTickProps) {
  const { x, y, stroke, payload } = props;

  return (
    <text
      x={x}
      y={y}
      dy={10}
      fill="#585858"
      fontWeight="bold"
      fontSize={10}
      textAnchor="middle"
    >
      {payload.value}
    </text>
  );
}

interface CustomizedYAxisTickProps {
  x: number;
  y: number;
  payload: {
    value: string | number;
  };
}

function CustomizedYAxisTick(props: CustomizedYAxisTickProps) {
  const { x, y, payload } = props;

  return (
    <text x={x} y={y} dx={-50} fill="#FD6100" fontWeight="bold" fontSize={10}>
      {payload.value}
    </text>
  );
}

interface DefaultYAxisTickProps {
  x: number;
  y: number;
  stroke?: string;
  payload: {
    value: string | number;
  };
}

function DefaultYAxisTick(props: DefaultYAxisTickProps) {
  const { x, y, stroke, payload } = props;

  return (
    <text
      x={x}
      y={y}
      dx={-30}
      fill="#585858"
      fontWeight="bold"
      fontSize={10}
      textAnchor="middle"
    >
      {payload.value}
    </text>
  );
}

export default function LineChartComponent<T>({
  chartData,
  lines,
  legend,
  tickCount,
  gridShow,
  paddingX,
  customX,
  customY,
}: ComponentProps<T>) {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      style={{ backgroundColor: "#fff", padding: "10px", borderRadius: "8px" }}
    >
      <LineChart
        data={chartData}
        margin={{
          top: 5,
          bottom: 5,
        }}
      >
        {typeof gridShow === "undefined" ? (
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
        ) : gridShow ? (
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
        ) : null}
        <XAxis
          className="text-xs"
          dataKey="xAxis"
          tickLine={false}
          tickSize={10}
          padding={paddingX ? paddingX : { left: 5 }}
          tick={customX ? CustomizedXAxisTick : DefaultXAxisTick}
        />
        <YAxis
          name={"Time"}
          tickSize={2}
          tickCount={tickCount || 5}
          className="text-xs"
          tick={customY ? CustomizedYAxisTick : DefaultYAxisTick}
        />
        <Tooltip wrapperClassName="text-xs" />

        {lines.map((line, index) => (
          <Line
            key={index}
            type={line.type}
            dataKey={line.name}
            stroke={line.color}
            strokeWidth={line.lineWidth}
            activeDot={{ r: line.dotSize }}
            dot={line.dotShow}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
