const getStudent = () => {
    return JSON.parse(localStorage.getItem('student'));
}

export default getStudent;