import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

export async function googleSuccess(
  response: GoogleLoginResponse | GoogleLoginResponseOffline
): Promise<void> {
  const res = response as GoogleLoginResponse;
  const profileObj = res?.profileObj;
  const token = res?.accessToken;

  console.log(profileObj, token);
}

export function googleFailure(
  response: GoogleLoginResponse | GoogleLoginResponseOffline
): void {
  console.log(response);
}
