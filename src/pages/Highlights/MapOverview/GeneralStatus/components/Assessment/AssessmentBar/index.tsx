export const AssessmentBar = ({
  avaliation,
  index,
  height
}: {
  avaliation: number;
  height: number;
  index: number;
}) => {
  return avaliation >= index ? (
    <div
      style={{ maxHeight: `${height}px` }}
      className={`transition-colors duration-500 ease-in-out  w-2 h-full rounded-sm ${
        avaliation < 4 ? ' bg-brand-yellow3' : ' bg-brand-green2'
      }`}
    ></div>
  ) : (
    <div
      style={{ maxHeight: `${height}px` }}
      className={`w-2 h-full rounded-sm bg-brand-grey6`}
    ></div>
  );
};
