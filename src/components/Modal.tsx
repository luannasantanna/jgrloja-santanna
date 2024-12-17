import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'var(--white)',
    border: '2px solid var(--red)',
    borderRadius: '1rem',
    boxShadow: 24,
    p: 6,
    color: 'var(--gray)',
    textAlign: 'center'
};

export default function BasicModal({ open, onClose, orderId }) {
    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2, color: 'var(--red)' }}>
                        Sucesso!
                    </Typography>
                    <Typography>
                        Em breve, você receberá um email com todas as informações da sua compra.
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, color: 'var(--red)' }}>
                        {orderId ? `O número do seu pedido é: ${orderId}` : 'Nenhum pedido encontrado'}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
