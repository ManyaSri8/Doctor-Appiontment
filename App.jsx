<Box
  sx={{
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: '1fr 1fr',
      md: '1fr 1fr 1fr'
    },
    gap: 2,
    padding: 2
  }}
>
  {appointments.map((appt) => (
    <AppointmentCard
      key={appt.id}
      appointment={appt}
      onDelete={() => handleDelete(appt.id)}
      onEdit={() => handleEdit(appt.id)}
    />
  ))}
</Box>
