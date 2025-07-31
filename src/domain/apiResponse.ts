/**
 *
 */
export default interface ApiResponse<T> {
  isOk: boolean;
  message: string;
  data?: T;
}