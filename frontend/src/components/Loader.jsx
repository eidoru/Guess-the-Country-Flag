import PropTypes from "prop-types";

function Loader({ loading, children }) {
  return (
    <>
      {loading ? (
        <div className="fixed bottom-10 right-10 flex items-center justify-center gap-x-6 transition-all">
          <div className="size-10 animate-spin rounded-full border-4 border-white/50 border-t-blue-600" />
          <span className="text-base font-medium">Please wait</span>
        </div>
      ) : (
        children
      )}
    </>
  );
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export { Loader };
