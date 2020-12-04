export const successHandler = (enqueueSnackbar, msg) => {
  let autoHideDuration = 3000;
  enqueueSnackbar(msg, {
    variant: "success",
    autoHideDuration
  });
};

export const infoHandler = (enqueueSnackbar, msg) =>
  enqueueSnackbar(msg, {
    variant: "info"
  });

export const warningHandler = (enqueueSnackbar, msg) =>
  enqueueSnackbar(msg, {
    variant: "warning"
  });

export const errorHandler = (enqueueSnackbar, msg) =>
  enqueueSnackbar(msg, {
    variant: "error"
  });