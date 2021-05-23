export const InitialValues = () => {
  return {
    id: 0,
    fullName: "",
    email: "",
    phone: "",
    gender: "male",
    city: "",
    departmentId: "",
    hireDate: new Date(),
    isPermanent: false,
  };
};

export const genderItems = [
  {
    id: "male",
    title: "Male",
  },
  {
    id: "female",
    title: "Female",
  },
  {
    id: "other",
    title: "Other",
  },
];

export const options = [
  {
    id: 1,
    title: "Development",
  },
  {
    id: 2,
    title: "Marketing",
  },
  {
    id: 3,
    title: "Accounting",
  },
  {
    id: 4,
    title: "Accounting",
  },
];

const KEYS = {
  employees: "employees",
  employeeId: "employeeId",
};

export const insertEmployee = (data) => {
  let employees = getAllEmployees();
  data["id"] = generateNewId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

export const generateNewId = () => {
  if (!localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, "0");
  var id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
};

export const getAllEmployees = () => {
  if (!localStorage.getItem(KEYS.employees)) {
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  }
  let employees = JSON.parse(localStorage.getItem(KEYS.employees));
  //dep title
  let departments = options;
  return employees.map((x) => ({
    ...x,
    department: departments[x.departmentId - 1].title,
  }));
};
