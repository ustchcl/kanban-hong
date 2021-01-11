import { Observable, BehaviorSubject } from "rxjs"

// [boolean, string]  closeable? message
export type ToastInfo = {
  closable: boolean;
  message: string;
  duration: number;
}

export type ToastParams = {
  closable?: boolean;
  message: string;
  duration?: number;
}

export const toastBS = new BehaviorSubject<ToastInfo>({
  closable: true,
  message: "",
  duration: 1
})

export function showToast(toast: ToastParams): void {
  toastBS.next({
    duration: 4000,
    closable: true,
    ...toast,
  })
}

