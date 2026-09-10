import { type SyntheticEvent } from "react"
import { Alert, Snackbar } from "@mui/material"
import { selectAppError, setAppErrorAC } from "@/app/app-slice"
import { useDispatch } from "react-redux"
import { useAppSelector } from "@/common/hooks"

export const ErrorSnackbar = () => {
  const error = useAppSelector(selectAppError)
  const dispatch = useDispatch()

  const handleClose = (_: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }
    dispatch(setAppErrorAC({ error: null }))
  }
  return (
    <Snackbar open={error !== null} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: "100%" }}>
        {error}
      </Alert>
    </Snackbar>
  )
}
