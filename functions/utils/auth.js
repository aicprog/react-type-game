const jwt = require('jsonwebtoken');
const jwks = require('jwks-rsa');
const jwksClient = jwks({
	jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
	audience: process.env.AUTH0_AUDIENCE,
});

const { promisify } = require('util');

const getAccessTokenFromHeader = (headers) => {
	const rawAuth = headers.authorization;
	if (!rawAuth) return null;

	const authorizationParts = rawAuth.split(' ');

	if (authorizationParts[0] !== 'Bearer' || authorizationParts.length !== 2)
		return null;

	const accessToken = authorizationParts[1];

	return accessToken;
};

const validateAccessToken = async (token) => {
	try {
		//Decoding jwt by decoding the header and body
		const decodedToken = jwt.decode(token, { complete: true });
		//Get kid from decoded token
		const kid = decodedToken.header.kid;
		const alg = decodedToken.header.alg;
		//Get signing key to get public key
		const getSigningKey = promisify(jwksClient.getSigningKey);
		//Uses kid to get all info about key
		const key = await getSigningKey(kid);
		//Get public key
		const signingKey = key.publicKey;
		//verify it is legit
		jwt.verify(token, signingKey, alg);
		return decodedToken.payload;
	} catch (err) {
		console.error(err);
		return null;
	}
};
module.exports = { getAccessTokenFromHeader, validateAccessToken };
