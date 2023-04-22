import {
    afterPatch,
    ServerAPI,
    wrapReactType,
    findInReactTree,
    appDetailsClasses
} from "decky-frontend-lib";
import React, { ReactElement } from "react";

const patchGameProperties = (serverAPI: ServerAPI) => {
    return serverAPI.routerHook.addPatch("/app/:appId/properties/general",
        (props: { path: string; children: ReactElement }) => {
            return props
        }
    );
}

export default patchGameProperties;