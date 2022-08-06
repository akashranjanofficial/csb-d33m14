/**
 * Copyright (c) 2019 mol* contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author akashranjan <akash-ranjan>
 */

import { PluginUIComponent } from "molstar/lib/mol-plugin-ui/base";

export class CustomToastMessage extends PluginUIComponent {
  render() {
    return (
      <>
        Custom <i>Toast</i> content. No timeout.
      </>
    );
  }
}
