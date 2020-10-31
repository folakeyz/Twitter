import * as React from 'react';
import { ITwitterProps } from './ITwitterProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import * as jQuery from "jquery";


export default class Twitter extends React.Component<ITwitterProps, {}> {
  public render(): React.ReactElement<ITwitterProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");   
    return (
      <>
      <TwitterTimelineEmbed
  sourceType="profile"
  screenName="AXAMansard"
  options={{height: 400}}
/>
      </>
    );
  }
}
