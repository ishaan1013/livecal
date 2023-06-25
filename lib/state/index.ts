import { create } from "zustand";
import { createClient } from "@liveblocks/client";
import { liveblocks } from "@liveblocks/zustand";
import type { WithLiveblocks } from "@liveblocks/zustand";

type State = {
  // Your Zustand state type will be defined here
};

const client = createClient({
  publicApiKey:
    "pk_dev_HcFppTumviawSWdK9hmZ23V4gb8X3vhUN2TRaIvTcD6uhHMBeJakGa4Ay5iTkhJm",
});

const useStore = create<WithLiveblocks<State>>()(
  liveblocks(
    (set) => ({
      // Your state and actions will go here
    }),
    { client }
  )
);

export default useStore;
