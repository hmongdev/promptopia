'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Form from '@components/Form';

const CreatePrompt = () => {
	const [submitting, setIsSubmitting] = useState(false);

	const [post, setPost] = useState({
		prompt: '',
		tag: '',
	});

	const createPrompt = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
	};

	return (
		<Form
			type="Create"
			post={post}
			setPost={setPost}
			submitting={submitting}
			handleSubmit={createPrompt}
		/>
	);
};

export default CreatePrompt;
