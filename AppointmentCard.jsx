import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Divider
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './AppointmentCard.css';

function AppointmentCard({ appointment, onDelete, onEdit }) {
  const {
    name,
    phone,
    date,
    time,
    doctor
  } = appointment;

  return (
    <Card className="appointment-card" elevation={4}>
      <CardContent>
        <Box className="card-header">
          <Typography variant="h6">{name}</Typography>
          <Box>
            <IconButton onClick={onEdit} size="small" color="primary">
              <EditIcon />
            </IconButton>
            <IconButton onClick={onDelete} size="small" color="error">
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Typography variant="body2" className="card-detail">
          📞 Phone: {phone}
        </Typography>
        <Typography variant="body2" className="card-detail">
          📅 Date: {date}
        </Typography>
        <Typography variant="body2" className="card-detail">
          ⏰ Time: {time}
        </Typography>
        <Typography variant="body2" className="card-detail">
          🩺 Doctor: {doctor}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AppointmentCard;
