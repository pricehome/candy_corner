const remoteURL = "http://localhost:5002"

export default {
	get(id) {
		return fetch(`${remoteURL}/candy/${id}`).then(e => e.json())
	},
	getAll() {
		return fetch(`${remoteURL}/candy`).then(e => e.json())
	}
}
