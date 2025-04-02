function cleanJSON(input) {
    return input.replace(/```json\s*|\s*```/g, '').trim()
}

export default cleanJSON