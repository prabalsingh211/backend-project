const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(res, req, next))
    .catch((err) => next(err));
  };
};

export { asyncHandler };

//ALTER

// const asyncHandler=(fn)=>{async()=>{}}
// alter

// const asyncHandler = (fn) => async (rew, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
