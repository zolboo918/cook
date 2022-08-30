import {CustomAlert} from './CustomAlert';

export function hexToRgb(hex: any) {
  var arrBuff = new ArrayBuffer(4);
  var vw = new DataView(arrBuff);
  vw.setUint32(0, parseInt(hex, 16), false);
  var arrByte = new Uint8Array(arrBuff);

  return arrByte[1] + ',' + arrByte[2] + ',' + arrByte[3];
}

export const showSuccessMessage = (message?: any) => {
  CustomAlert.show('', message);
};

export const showUnSuccessMessage = (message?: any) => {
  CustomAlert.show('Амжилтгүй', message);
};

export const showDialogMessage = (message: any, handler: any) => {
  CustomAlert.show(
    message,
    'Анхаар!',
    'dialog',
    'ios-help-circle-outline',
    handler,
  );
};
