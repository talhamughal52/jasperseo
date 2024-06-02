import Skeleton from "@mui/material/Skeleton";

const ContentEditorLoader = () => {
  return (
    <Skeleton
      variant="rectangular"
      animation="wave"
      width="100vw"
      height="100vh"
    />
  );
};

export default ContentEditorLoader;
