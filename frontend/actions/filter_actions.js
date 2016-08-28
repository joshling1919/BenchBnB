export const FilterConstants = {
  MARKER_HOVER: "MARKER_HOVER"
};

export const markerHover = (bench) => ({
  type: FilterConstants.MARKER_HOVER,
  bench
});
