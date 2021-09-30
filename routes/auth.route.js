const verifySignUp = require('../middleware');
const controller = require('../controllers/auth.controller');
const router = express.Router();

router.use((req,res,next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

router.post("/signup",
    [
        verifySignUp.checkDuplicateUsernameOrEmail,
        checkRolesExisted
    ],
    controller.signup
);

router.post("/login", controller.signin);

module.exports = router;