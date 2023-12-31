export const findById = (resources, id) => resources.find((r) => r.id === id)

export const upsert = (resources, resource) => {
	const index = resources.findIndex((r) => r.id === resource.id)

	if (index !== -1) {
		resources[index] = resource
	} else {
		resources.push(resource)
	}
}
