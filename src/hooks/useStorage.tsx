// firestore
import { getStorage, ref } from 'firebase/storage'
import { useDownloadURL } from 'react-firebase-hooks/storage'

export const useStorage = (requestUrl: string) => {
	const storage = getStorage()

	const [value, loading, error] = useDownloadURL(ref(storage, requestUrl))

	return {
		imgUrl: value,
		loading,
		error
	}
}
