﻿export interface RestApiExampleResponse<T> {
  status: string;
  data: T;
  message: string;
}