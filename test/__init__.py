from test.api import router


def register(app):
	from .api import router
	app.include_router(router, prefix="/test")

def unregister(app):
	return router
