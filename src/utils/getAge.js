import getStudent from "../database";


const getAge = () => {
    const { yearOfBirth } = getStudent();
    const age = Math.floor(
        (Date.now() - new Date(yearOfBirth).getTime()) / 3.154e10
    );
    return `${age.toString()} лет `;
};

export default getAge;