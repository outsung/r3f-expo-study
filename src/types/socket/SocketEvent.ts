export type SocketEvent = {
  r3fObjectCreate: {
    r3fObjectId: string;
    type: "box" | "model";
    groupString?: string;
  };
  r3fObjectFocus: {
    id: string;
    r3fObjectId: string;
  };
};
