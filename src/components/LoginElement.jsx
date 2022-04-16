function LoginElement({ onFormSubmit, onInputChange }) {
	return (
		<div className='login-element'>
			<div className='form-container'>
				<form onSubmit={onFormSubmit}>
					<h2>Login</h2>
					<input
						type='text'
						placeholder='Enter username'
						id='username'
						name='username'
						onChange={onInputChange}
						required
					/>
					<input
						type='password'
						placeholder='Enter password'
						id='password'
						name='password'
						onChange={onInputChange}
						required
					/>
					<input type='submit' value='Login' id='submit' />
				</form>
			</div>
			{/* <div className='login-instead-container'>
				<p className='login-instead-text'>Not registered yet?</p>
				<p className='login-instead-text login-link'>Register</p>
			</div> */}
		</div>
	);
}

export default LoginElement;
