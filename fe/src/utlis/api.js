const server = 'http://localhost:3000';

export const getTasks = async(callback) => {
  const response = await fetch(`${server}/tasks?n=10`);
  const data = await response.json(); 
  callback(data);
}

export const updateTask = async(uuid, callback) => {
  const response = await fetch(
    `${server}/tasks/${uuid}`, {
      method: 'PUT',
    }
  );
  const data = await response.json(); 
  callback(data);
}