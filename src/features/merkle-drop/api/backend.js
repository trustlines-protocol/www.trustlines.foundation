export async function fetchTokenEntitlement(address) {
  const response = await fetch(
    process.env.REACT_APP_API_URL + address.toString()
  );
  const data = await response.json();
  if (!response.ok) {
    const error = new Error(data.message);
    error.code = SERVER_ERROR_CODE;
    throw error;
  } else {
    return data;
  }
}

export const SERVER_ERROR_CODE = "SERVER_ERROR_CODE";
