'use client';
import axios from 'axios';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import { User } from '@prisma/client';
interface GroupChatModalProps {
    isOpen?: boolean;
    onClose: () => void;
    users: User[];
}
const GroupChatModal: React.FC<GroupChatModalProps> = ({
   isOpen,
   onClose,
   users = []
}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            members: []
        }
    });

    const members = watch('members');

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/conversations', {
            ...data,
            isGroup: true
        })
            .then(() => {
                router.refresh();
                onClose();
            })
            .catch(() => toast.error('Something went wrong!'))
            .finally(() => setIsLoading(false));
    }

    return(
        <div> hgi</div>
    )
}
export default GroupChatModal;