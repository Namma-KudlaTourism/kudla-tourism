import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Form } from 'react-bootstrap';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ title: '', description: '' });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/data');
      setData(res.data);
    };

    fetchData();
  }, []);

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('/api/data', form);
    setData([...data, res.data]);
  };

  const onDelete = async id => {
    await axios.delete(`/api/data/${id}`);
    setData(data.filter(item => item._id !== id));
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={form.title}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={form.description}
            onChange={onChange}
          />
        </Form.Group>
        <Button type="submit">Add Data</Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
                <Button variant="danger" onClick={() => onDelete(item._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
