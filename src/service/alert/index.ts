export const AlertError = async (data:any) => {
    alert(data)
    return
}

export const AlertSuccess = async (res?:any) => {
    alert('success')
    return
}

export const AlertService = { onSuccess: AlertSuccess, onError: AlertError,}