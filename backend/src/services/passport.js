import passport from "passport"
async function upsertOAuth(profile, provider) {
const email = (profile.emails?.[0]?.value || "").toLowerCase()
const providerId = profile.id
const displayName = profile.displayName || profile.username || "Usuário"


let user = await prisma.user.findFirst({ where: { provider, providerId } })
if (!user && email) user = await prisma.user.findUnique({ where: { email } })


if (user) {
return prisma.user.update({ where: { id: user.id }, data: { provider, providerId, displayName } })
}


return prisma.user.create({
data: {
email,
role: "FREELANCER", // padrão — pode ajustar via UI depois
provider,
providerId,
displayName,
},
})
}


passport.use(new GoogleStrategy({
clientID: process.env.GOOGLE_CLIENT_ID,
clientSecret: process.env.GOOGLE_CLIENT_SECRET,
callbackURL: "/api/auth/google/callback",
}, async (_accessToken, _refreshToken, profile, done) => {
try {
const user = await upsertOAuth(profile, "google")
done(null, user)
} catch (e) { done(e) }
}))


passport.use(new FacebookStrategy({
clientID: process.env.FACEBOOK_CLIENT_ID,
clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
callbackURL: "/api/auth/facebook/callback",
profileFields: ["id", "displayName", "emails"]
}, async (_accessToken, _refreshToken, profile, done) => {
try {
const user = await upsertOAuth(profile, "facebook")
done(null, user)
} catch (e) { done(e) }
}))


passport.use(new AppleStrategy({
clientID: process.env.APPLE_CLIENT_ID,
teamID: process.env.APPLE_TEAM_ID,
keyID: process.env.APPLE_KEY_ID,
callbackURL: "/api/auth/apple/callback",
privateKeyString: process.env.APPLE_PRIVATE_KEY?.split("\\n").join("\n"),
passReqToCallback: false,
}, async (_accessToken, _refreshToken, profile, done) => {
try {
const user = await upsertOAuth(profile, "apple")
done(null, user)
} catch (e) { done(e) }
}))


export default passport