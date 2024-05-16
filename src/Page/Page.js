import {Welcome} from "../Welcome";
import {QuestionSearchDropdown} from "../QuestionSearchDropdown";
import {useState} from "react";
import {StaticDashboard} from "@metabase/embedding-sdk-react";
import {FontSelector} from "../FontSelector";
import {LogoutButton} from "../Logout";
import {ShowVisualizationToggle} from "../ShowVisualizationToggle";

import "./Page.css";
import {StyleLeakFlag} from "../StyleLeakFlag/StyleLeakFlag";
import {TestError} from "../TestError";

export const Page = () => {
    const [question, setQuestion] = useState(null);
    const [showVisualizationSelector, setShowVisualizationSelector] =
        useState(false);

    console.log(question)

    return (
        <div className="Page--container">
            <header className="Page--header">
                <Welcome/>
                <LogoutButton/>
            </header>

            <div className="tw-p-5">
                <QuestionSearchDropdown
                    selectedQuestion={question}
                    setSelectedQuestion={setQuestion}
                />
            </div>
            {/*<div className="tw-flex-1">*/}
            {/*    /!*<TestError message="This is a test error message"/>*!/*/}
            {/*    /!*<InteractiveQuestion questionId={1} />*!/*/}
            {/*    {question ? (*/}
            {/*        <div className="tw-w-full tw-h-full tw-flex tw-flex-col">*/}
            {/*            <ShowVisualizationToggle*/}
            {/*                onClick={() =>*/}
            {/*                    setShowVisualizationSelector(!showVisualizationSelector)*/}
            {/*                }*/}
            {/*                showVisualizationSelector={showVisualizationSelector}*/}
            {/*                question={question}*/}
            {/*            />*/}
            {/*            <StaticQuestion*/}
            {/*                showVisualizationSelector={showVisualizationSelector}*/}
            {/*                questionId={question.id}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    ) : (*/}
            {/*        <div className="tw-grid tw-place-items-center tw-h-full tw-font-bold tw-text-gray-400 tw-text-3xl">*/}
            {/*            Select a question to display here.*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</div>*/}

            <div className="tw-flex-1">
                <StaticDashboard dashboardId={9} />
            </div>

            <footer className="Page--footer">
                <FontSelector/>
                <StyleLeakFlag/>
            </footer>
        </div>
    );
};
