export const HelloMassage = () => {
  return "Hello User";
};

export const HelloName = (userName) => {
  return `Good morning ${userName}`;
};

export const HelloNameAndAge = (name, age) => {
  if (age > 18) {
    return `good morning ${name} age ${age}`;
  }
  else return `sorry you're under 18`;
};

export const HeaderText=()=>{
return <h1>Good night</h1>
}


export const GetMailText=(Email)=>{
return `A${Email}`;
}

const Admin = () => {
  return <div></div>;
};

export default Admin;
