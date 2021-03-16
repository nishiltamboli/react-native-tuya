import { NativeModules } from 'react-native';

const tuya = NativeModules.TuyaRoomModule;

export type AddDeviceToRoomParams = {
  roomId: number;
  devId: string;
};

export type AddDeviceResponse = {
  devId: string;
  roomId: number;
};

export function addDevice(
  params: AddDeviceToRoomParams
): Promise<AddDeviceResponse> {
  return tuya.addDevice(params);
}
