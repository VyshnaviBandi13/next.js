import id, { chunks as chunks } from "../components/hello" with {
    "transition": "next-client-chunks"
};
import dynamic from 'next/dynamic';
import somethingElse from 'something-else';
const DynamicComponent = dynamic(()=>import('../components/hello'), {
    loadableGenerated: {
        modules: [
            JSON.stringify({
                id: id,
                chunks: chunks
            })
        ]
    }
});
somethingElse.dynamic('should not be transformed');
