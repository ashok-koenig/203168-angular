// interface ICourse {
//     title: string
//     studentCount: number
//     namelist?: string[]
// }

type ICourse = {
    title: string
    studentCount: number
    namelist?: string[]
}

const course: ICourse ={title: "UI Development", studentCount: 20}

const courses: ICourse[] = [
    {title: "UI Development", studentCount: 20},
    {title: "TypeScript", studentCount: 20}
]

console.log(course);
console.log(courses);

