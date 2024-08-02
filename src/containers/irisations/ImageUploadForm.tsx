// components/ImageUploadForm.tsx
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '@/components/Tooltip';
import { storage } from 'firebaseConfig';


type ImageUploadFormProps = {
  onUpload: (url: string) => void;
};
/**
 * 
 * @param  onUpload: (url: string) => void; 
 * @returns  react
 */
export default function ImageUploadForm({ onUpload }: ImageUploadFormProps) {
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      // (snapshot) => {
      //   const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      // },
      // (error) => {
      //   console.error(error);
      // },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          onUpload(downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <input
        id='fileInput'
        type='file'
        accept='image/*'
        onChange={handleUpload}
        style={{ display: 'none' }}
      />
      <Tooltip message='Export image'>
      <label
        htmlFor='fileInput'
        className='p-2'>
        <FontAwesomeIcon icon={faUpload} className='mr-2' />
        </label>
        </Tooltip>
    </div>
  );
}
