import { ESettingsType } from "@/types/type";
import React from "react";
import Personal from "../Personal/Personal";
import Preferences from "../Preferences/Preferences";
import Security from "../Security/Security";
import { useParams } from "next/navigation";
import Privacy from "../Privacy/Privacy";
import Payment from "../Payment/Payment";
import Notifications from "../Notifications/Notifications";
import OtherTravelers from "../OtherTravelers/OtherTravelers";
import Link from "next/link";
import ICProfile from "@/components/Icons/MySettingsIcons/ICProfile";
import "./SettingsDetail.scss";
import TabSettings from "./TabSettings/TabSettings";

export function SettingsDetail() {
  const params = useParams();

  const getComponentType = () => {
    switch (params.slug) {
      case ESettingsType.PERSONAL:
        return <Personal />;
      case ESettingsType.PREFERENCES:
        return <Preferences />;
      case ESettingsType.SECURITY:
        return <Security />;
      case ESettingsType.PAYMENT:
        return <Payment />;
      case ESettingsType.PRIVACY:
        return <Privacy />;
      case ESettingsType.NOTIFICATIONS:
        return <Notifications />;
      case ESettingsType.OTHER_TRAVELERS:
        return <OtherTravelers />;
      default:
        return <>không có gì</>;
    }
  };

  const componentType = getComponentType();

  return (
    <div className="flex mt-10">
      <div className="basis-1/4 mr-6">
        <TabSettings />
      </div>
      <div className="basis-3/4">{componentType}</div>
    </div>
  );
}
