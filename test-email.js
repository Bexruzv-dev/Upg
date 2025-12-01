// Test email verification
const axios = require('axios');

async function testEmailVerification() {
    try {
        console.log('📧 Testing email verification...\n');

        const response = await axios.post('http://localhost:5000/api/auth/send-code', {
            email: 'abdusalomovbexruzv@gmail.com'
        });

        console.log('✅ Response:', response.data);
        console.log('\n📱 Check your phone Gmail app for verification code!');
    } catch (error) {
        console.error('❌ Error:', error.response?.data || error.message);
    }
}

testEmailVerification();
