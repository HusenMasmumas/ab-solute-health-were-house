const AlertError = async (data:any) => {
    alert(data)
    return
}

const AlertSuccess = async (res:any) => {
    alert('success')
    return
}

export const AlertService = { onSuccess: AlertSuccess, onError: AlertError,}