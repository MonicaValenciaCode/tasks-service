export enum TaskStatus {
  done = "done",
  pending = "pending", //tasks within date and no done yet
  unfinished = "failed", //tasks not accomplished in time
  cancelled = "cancelled", // tasks cancelled, no need to do them
}
