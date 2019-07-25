const remoteURL = "http://localhost:5002"

export default {
	get(id) {
		return fetch(`${remoteURL}/store/${id}`).then(e => e.json())
	},
	getAll() {
		return fetch(`${remoteURL}/store`).then(e => e.json())
	}
}
