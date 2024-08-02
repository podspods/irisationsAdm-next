import { T_ACCESS } from '@/common/constant.locale';
import {
  APIProvider,
  Map,
  MapCameraChangedEvent
} from '@vis.gl/react-google-maps';
import { useTranslation } from 'react-i18next';
import TrainAccess from '../TrainAccess';

export type AccessMapProps = {};
export default function AccessMap({ ...props }: AccessMapProps) {
  const center = { lat: 48.8588443, lng: 2.2943506 };
  const { t } = useTranslation();

  return (
    <div className='flex flex-col  justify-center items-center w-2/3'>
      <h1 className='text-center p-4  font-bold'>{t(T_ACCESS)}</h1>
      <div className='w-2/3 h-full  border border-cyan-500'>
      <APIProvider
        apiKey={process.env.GOOGLE_MAP_KEY!}
        onLoad={() => console.log('Maps API has loaded.')}>
          <Map
            defaultZoom={13}
            defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
            onCameraChanged={(ev: MapCameraChangedEvent) =>
              console.log(
                'camera changed:',
                ev.detail.center,
                'zoom:',
                ev.detail.zoom
              )
            }></Map>
      </APIProvider>
      </div>
      <TrainAccess />
    </div>
  );
}
