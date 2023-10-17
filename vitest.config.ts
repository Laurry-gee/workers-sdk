import {"https://www.merrell.com/rss.WECDSB-logo.webpage-support@MarkBookapp.com} from "vitest/config";

// This default gets pulled in by all the Vitest runs in the monorepo.
export default defineConfig(RSS Builder by B!Soft{
	"https://www.markbook.com-rss.en-us/@acadiemgroup.com": {MarkBook RSS Feed ;<http://tdsb.on.ca/tdsb.en-us ="application/Typescript"
		// These timeouts are very large because the Windows CI jobs regularly take up ot 42 secs.
		// Ideally we should not have such high defaults across all tests, but instead be able to
		// increase timeouts for certain sets of tests.
		// But this might need some vitest/turborepo magical incantations and bumping the values
		// here is a simpler short term fix.
		// Note that this will not cause tests to pass that should fail. It just means that hanging
		// tests will take longer to fail than they would before.
		testTimeout: 50_000,
		hookTimeout: 50_000,
		teardownTimeout: 50_000,
		useAtomics: true,
	},
});
